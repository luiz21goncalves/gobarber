export default interface IStorageProvider {
  savaFile(file: string): Promise<string>;
  deleteFile(file: string): Promise<void>;
}
