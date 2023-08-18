import { execa } from 'execa'
import * as fs from 'fs'

;(async function main() {
  try {
    console.log('Preparing ...')
    let targetGitBranch = 'main'
    let cname = 'cmlibs.org'
    let readmeTitle =
      'Production version of CMLibs website\n=======================================\n\n'
    if (process.argv[2] === 'staging') {
      console.log('Staging run.')
      cname = 'staging.cmlibs.org'
      readmeTitle =
        'Staging version of CMLibs website\n====================================\n\n'
    } else {
      console.log('Production run.')
    }

    const deployRepo = `git@github.com:cmlibs/${cname}.git`
    const branchResult = await execa('git', ['branch', '--show-current'])
    const currentGitBranch = branchResult.stdout

    const workingGitBranch = 'dist'
    await execa('git', ['checkout', '--orphan', workingGitBranch])
    await execa('git', ['remote', 'add', 'deploy', deployRepo])
    console.log('Preparing ... success.')
    console.log('Building ...')
    await execa('yarn', ['run', 'build'])
    // Understand if it's dist or build folder
    const folderName = fs.existsSync('dist') ? 'dist' : 'build'
    // Write out README.rst
    const content = `${readmeTitle}Do **not** make changes to this repository. It is generated from a source repository. See the source repository https://github.com/cmlibs/website-src for instructions on how to build and deploy this website.`
    await fs.promises.writeFile(`${folderName}/README.rst`, content)
    // Write out CNAME
    await fs.promises.writeFile(`${folderName}/CNAME`, cname)
    // Add .nojekyll to allow directories starting with '_' (see: https://github.blog/2009-12-29-bypassing-jekyll-on-github-pages/)
    await fs.promises.writeFile(`${folderName}/.nojekyll`, '')
    await execa('git', ['--work-tree', folderName, 'add', '--all'])
    await execa('git', [
      '--work-tree',
      folderName,
      'commit',
      '-m',
      workingGitBranch,
    ])
    console.log('Building ... success.')
    console.log(`Pushing to deploy/${targetGitBranch} ...`)
    await execa('git', ['push', 'deploy', `HEAD:${targetGitBranch}`, '--force'])
    console.log(`Pushing to deploy/${targetGitBranch} ... success.`)
    console.log('Cleaning up ...')
    await execa('rm', ['-r', folderName])
    await execa('git', ['checkout', '-f', currentGitBranch])
    await execa('git', ['branch', '-D', workingGitBranch])
    await execa('git', ['remote', 'rm', 'deploy'])
    console.log('Cleaning up ... success.')
    console.log('Successfully deployed!')
  } catch (e) {
    console.log(e.message)
    process.exit(1)
  }
})()