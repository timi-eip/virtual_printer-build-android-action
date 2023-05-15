import {setOutput} from '@actions/core'

type ActionOutputs = {
  greetings_file_path: string
}

function setActionOutputs(outputs: ActionOutputs): void {
  for (const [key, value] of Object.entries(outputs)) {
    setOutput(key, value)
  }
}

export {ActionOutputs, setActionOutputs}
