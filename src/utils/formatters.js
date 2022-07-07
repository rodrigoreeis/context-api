export const numberFormatter = ({
  value = 0,
  currency = "BRL",
  decimals = 2,
  currencyDisplay = "symbol",
}) => {
  return Intl.NumberFormat("pt-BR", {
    currency,
    currencyDisplay,
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value)
}

export const currencyFormatter = (props) => {
  return numberFormatter({
    ...props,
    style: "currency",
  })
}
