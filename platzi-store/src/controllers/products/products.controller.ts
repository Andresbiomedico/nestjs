import {
  Controller,
  Delete,
  Get,
  Param,
  Query,
  HttpStatus,
  HttpCode,
  Res,
  //ParseIntPipe,
} from '@nestjs/common';
import {
  Post,
  Put,
} from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { Response } from 'express';
import { ProductService } from '../../services/product.service';
import { ParseIntPipe } from '../../common/parse-int/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductService) {}

  @Get('filter')
  getProductFilter() {
    return `filter`;
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('productId', ParseIntPipe) productId: string) {
    // return {
    //   message: `product ${productId}`,
    // };
    return this.productService.findOne(+productId);
  }

  // respuesta con express
  // @Get(':productId')
  // getOneExpress(
  //   @Res() response: Response,
  //   @Param('productId') productId: string,
  // ) {
  //   response.status(200).send({
  //     message: `product ${productId}`,
  //   });
  // }

  @Get()
  getProducts(
    @Query('limit')
    limit = 100,
    @Query('offset')
    offset = 0,
    @Query('brand') brand = 'xyz',
  ) {
    // return {
    //   message: `limit ${limit} ofset ${offset} brand ${brand}`,
    // };
    return this.productService.findAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() payload: CreateProductDto) {
    // return {
    //   message: 'accion crear',
    //   payload,
    // };
    return this.productService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateProductDto) {
    // return {
    //   id,
    //   message: 'accion update',
    //   payload,
    // };
    return this.productService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    // return {
    //   id,
    //   message: 'accion Delete',
    // };
    return this.productService.delete(+id);
  }
}
