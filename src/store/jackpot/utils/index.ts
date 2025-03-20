function formatLotteryNumber(source: string) {
  return source.replace(/(\d{3})(\d{3})/, "$1 $2");
}

export { formatLotteryNumber };
