import { Controller, Get, Post, Put, Req, Res } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get('list')
  listUser(@Res() response): Object {
    response.json([
      {
        name: 'Adam Firdaus',
        class: 'Assasin',
      },
      {
        name: 'Hana Frinka',
        class: 'Mage',
      },
    ]);
  }
  @Post('create')
  createUser(@Req() request, @Res() response) {
    response.status(201).json({
      message: 'user added successfully!',
      data: request.body,
    });
  }
  @Put('disable/:id')
  disableUser(@Req() request, @Res() response) {
    response.json({
      data: request.params.id,
      message: 'user disabled successfully!',
    });
  }
}
