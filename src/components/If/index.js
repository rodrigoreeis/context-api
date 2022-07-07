const If = ({ children, condition, renderIf = null, renderElse = null }) => {
  const ifElement = children ? children : renderIf
  return condition ? ifElement : renderElse
}

export default If
