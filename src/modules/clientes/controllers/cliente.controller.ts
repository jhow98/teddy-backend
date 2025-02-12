import { 
  Controller, Get, Post, Put, Delete, Body, Param, Query 
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { ClienteService } from '../services/cliente.service';
import { CreateClienteDto } from '../dto/create-cliente.dto';
import { ClienteDto } from '../dto/cliente.dto';
import { Cliente } from '../entities/cliente.entity';

@ApiTags('clientes')
@Controller('clientes')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @ApiOperation({ summary: 'Criar um novo cliente' })
  @ApiBody({
    description: 'Dados necessários para criar um cliente',
    type: CreateClienteDto,
  })

  @ApiResponse({ status: 201, description: 'Cliente criado com sucesso.', type: ClienteDto })
  @Post()
  async criar(@Body() cliente: CreateClienteDto): Promise<ClienteDto> {
    return await this.clienteService.criar(cliente);
  }

  @ApiOperation({ summary: 'Listar todos os clientes com paginação' })
  @ApiResponse({ status: 200, description: 'Lista de clientes retornada com sucesso.', type: ClienteDto })
  @Get()
  async buscarTodos(
    @Query('pagina') pagina: number = 1,
    @Query('limite') limite: number = 16
  ) {
    return await this.clienteService.buscarTodos(Number(pagina), Number(limite));
  }

  @ApiOperation({ summary: 'Buscar um cliente pelo ID' })
  @ApiResponse({ status: 200, description: 'Cliente encontrado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Cliente não encontrado.' })
  @Get(':id')
  async buscarPorId(@Param('id') id: number) {
    return await this.clienteService.buscarPorId(id);
  }

  @ApiOperation({ summary: 'Atualizar um cliente pelo ID' })
  @ApiResponse({ status: 200, description: 'Cliente atualizado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Cliente não encontrado.' })
  @Put(':id')
  async atualizar(@Param('id') id: number, @Body() cliente: Partial<Cliente>) {
    return await this.clienteService.atualizar(id, cliente);
  }

  @ApiOperation({ summary: 'Deletar um cliente pelo ID' })
  @ApiResponse({ status: 200, description: 'Cliente deletado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Cliente não encontrado.' })
  @Delete(':id')
  async deletar(@Param('id') id: number) {
    return await this.clienteService.deletar(id);
  }
}
