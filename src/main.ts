import * as core from '@actions/core'
import * as fs from 'fs'
import {ActionInputs, getActionInputs} from './actionInputs'
import {ActionOutputs, setActionOutputs} from './actionOutputs'
import path from 'path'

function myAction(actionInputs: ActionInputs): ActionOutputs {
  const greeting_message = `Hello ${actionInputs.who_to_greet}!`
  const greetings_file_path = path.resolve('./greetings.txt')
  core.info('GREETINGS:')
  core.info(greeting_message) // Equivalent to console.log
  core.debug(`This is a debug message`) // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true
  fs.writeFileSync(greetings_file_path, greeting_message)
  const actionOutputs: ActionOutputs = {
    greetings_file_path
  }
  return actionOutputs
}

async function main(): Promise<void> {
  try {
    const actionInputs: ActionInputs = getActionInputs()
    const actionOutputs = myAction(actionInputs)
    setActionOutputs(actionOutputs)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

main()
