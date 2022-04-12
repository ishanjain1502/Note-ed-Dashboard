import tools from "./commonTools"

let str = "{\"time\":1649696407993,\"blocks\":[{\"type\":\"paragraph\",\"data\":{\"text\":\"<b>the </b>status th<i>at contaien</i>s\"}},{\"type\":\"header\",\"data\":{\"text\":\"monk\",\"level\":2}}],\"version\":\"2.15.1\"}"

const config = {
  holder: 'editorjs',
  autofocus: true,
  placeholder: "write your notes here...",
  readOnly: false,
  tools: tools,
  data: JSON.parse(str)
}
export default config