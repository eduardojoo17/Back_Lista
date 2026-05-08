import { AppDataSource } from "../data-source.js";
import { Lista } from "../entities/Lista.js";

export class ListaService {
  private listaRepository = AppDataSource.getRepository(Lista);

  create = async (list: Partial<Lista>) => {
    const newList = this.listaRepository.create(list);
    return await this.listaRepository.save(newList);
  };

  listar = async () => {
    return await this.listaRepository.find();
  };
}
