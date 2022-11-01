import * as core from '@actions/core'
import {exec} from '@actions/exec'

import {ArgsBuilder} from './args-builder'

async function run(): Promise<void> {
  try {
    const name: string = core.getInput('name', {required: true})
    const autoCleanupSpace: boolean = core.getBooleanInput('auto-cleanup')

    if (autoCleanupSpace) {
      const args: ArgsBuilder = new ArgsBuilder()
      args.addSubcommand('delete')
      args.addSubcommand('space')
      args.addSubcommand(name)
      args.add('cluster', core.getInput('cluster'))
      args.addFlag('delete-context', true)

      await exec('loft', args.build())
    }
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message)
    }
  }
}

run()
