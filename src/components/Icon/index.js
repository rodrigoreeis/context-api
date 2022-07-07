const Icon = ({ id, ...props }) => {
  return (
    <svg className={`icon ${id}`} {...props}>
      <use xlinkHref={`#${id}`} />
    </svg>
  )
}

export default Icon
