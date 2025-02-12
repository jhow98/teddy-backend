import { ApiProperty } from '@nestjs/swagger';

export class CreateClienteDto {
  @ApiProperty({ example: 'João Silva', description: 'Nome do cliente' })
  nome: string;

  @ApiProperty({ example: 3500, description: 'Salário do cliente' })
  salario: number;

  @ApiProperty({ example: 120000, description: 'Valor da empresa do cliente' })
  valorEmpresa: number;
}
