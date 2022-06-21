export interface INotifier {
  createNotifier(): void
  showNotifier(message: string): void
}
