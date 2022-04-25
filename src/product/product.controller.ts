import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { CreateProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';
//Controller ayuda a manejar las rutas del servidor
@Controller('product') //main
export class ProductController {
  constructor(private productService: ProductService) {}
  @Post('/create') //product/create
  async createPost(@Res() res, @Body() createProductDTO: CreateProductDTO) {
    const product = await this.productService.createProduct(createProductDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Product successfully created',
      product,
    });
  }
  @Get('/')
  async getProducts(@Res() res) {
    const products = await this.productService.getProducts();
    return res.status(HttpStatus.OK).json(products);
  }
  @Get('/:productID')
  async getProduct(@Res() res, @Param('productID') productID) {
    const product = await this.productService.getProduct(productID);
    if (!product) throw new NotFoundException('Product does not exist!');
    return res.status(HttpStatus.OK).json(product);
  }
  @Delete('/delete')
  async deleteProduct(@Res() res, @Query('productID') productID) {
    //query es la consulta
    const productDeleted = await this.productService.deleteProduct(productID);
    if (!productDeleted) throw new NotFoundException('Product does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Product Deleted Successfully',
      productDeleted,
    });
  }
  @Put('/update')
  async updateProduct(
    @Res() res,
    @Body() createProductDTO: CreateProductDTO,
    @Query('productID') productID,
  ) {
    //query es la consulta
    const productUpdated = await this.productService.updateProduct(
      productID,
      createProductDTO,
    );
    if (!productUpdated) throw new NotFoundException('Product does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Product Updated Successfully',
      productUpdated,
    });
  }
}
