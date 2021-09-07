import * as core from '@actions/core'
import {exec} from '@actions/exec'

import {ArgsBuilder} from './args-builder'

async function run(): Promise<void> {
  try {
    const name: string = core.getInput('name', {required: true})
    const postDeleteSpace: boolean = core.getBooleanInput('post-delete-space')

    if (postDeleteSpace) {
      const args: ArgsBuilder = new ArgsBuilder()
      args.addSubcommand('delete')
      args.addSubcommand('space')
      args.addSubcommand(name)
      args.add('cluster', core.getInput('cluster'))
      args.addFlag('delete-context', true)

      await exec('loft', args.build())
    }
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
