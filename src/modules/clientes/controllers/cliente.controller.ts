import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../entities/cliente.entity';

@Controller('clientes')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post()
  async criar(@Body() cliente: Cliente) {
    return await this.clienteService.criar(cliente);
  }

  @Get()
  async buscarTodos(
    @Query('pagina') pagina = 1,
    @Query('limite') limite = 16,
  ) {
    return await this.clienteService.buscarTodos(Number(pagina), Number(limite));
  }

  @Get(':id')
  async buscarPorId(@Param('id') id: number) {
    return await this.clienteService.buscarPorId(id);
  }

  @Put(':id')
  async atualizar(@Param('id') id: number, @Body() cliente: Partial<Cliente>) {
    return await this.clienteService.atualizar(id, cliente);
  }

  @Delete(':id')
  async deletar(@Param('id') id: number) {
    return await this.clienteService.deletar(id);
  }
}
