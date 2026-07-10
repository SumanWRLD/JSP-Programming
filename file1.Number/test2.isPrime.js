export function isPrime(N) {
  if (N <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.trunc(N / 2); i++) {
    if (N % i == 0) {
      return false;
    }
  }
  return true;
}
