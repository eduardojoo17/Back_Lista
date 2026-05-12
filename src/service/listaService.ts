import { AppDataSource } from "../data-source.js";
import { Lista } from "../entities/Lista.js";
import { NotFoundError } from "../helpers/apiError.js";

export class ListaService {
  private listaRepository = AppDataSource.getRepository(Lista);

  create = async (list: Partial<Lista>) => {
    const newList = this.listaRepository.create(list);
    return await this.listaRepository.save(newList);
  };

  listar = async () => {
    return await this.listaRepository.find();
  };

  update = async (id: number, data: Partial<Lista>) => {
    const newid = await this.listaRepository.findOneBy({ id });
    if (!newid) throw new NotFoundError("Produto não encontrado");
    this.listaRepository.merge(newid, data);
    return await this.listaRepository.save(newid);
  };

  delete = async (id: number) => {
    const user = await this.listaRepository.findOneBy({ id });
    if (!user) throw new NotFoundError("produto não encontrado");
    return await this.listaRepository.delete(id);
  };
}
