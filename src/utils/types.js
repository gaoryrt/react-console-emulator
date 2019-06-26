import { string, bool, array, node, oneOfType, object } from 'prop-types'

export const types = {
  background: string,
  backgroundSize: string,
  textColor: string,
  promptLabelColor: string,
  promptTextColor: string,
  className: string,
  contentClassName: string,
  inputAreaClassName: string,
  promptLabelClassName: string,
  inputClassName: string,
  contentFontFamily: string,
  inputFontFamily: string,
  autoFocus: bool,
  dangerMode: bool,
  disableOnProcess: bool,
  noDefaults: bool,
  noAutomaticStdout: bool,
  noHistory: bool,
  noAutoScroll: bool,
  welcomeMessage: oneOfType([
    bool,
    array,
    string,
    node
  ]),
  commands: object.isRequired,
  promptLabel: oneOfType([
    node,
    string
  ]),
  helpLabel: node,
  errorLabel: node,
  historyAreaClassName: string,
  historyCommandClassName: string
}
