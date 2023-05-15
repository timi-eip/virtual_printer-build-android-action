import * as core from '@actions/core'

type ActionInputs = {
  who_to_greet: string
}

function getActionInputs(): ActionInputs {
  return {
    who_to_greet: core.getInput('who_to_greet')
  }
}

export {ActionInputs, getActionInputs}
