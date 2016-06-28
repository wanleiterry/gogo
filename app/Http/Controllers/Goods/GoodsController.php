<?php

namespace App\Http\Controllers\Goods;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Response;
use App\Services\GoodsService;

class GoodsController extends Controller
{
    public function __construct(GoodsService $goodsService)
    {
        $this->service = $goodsService;
    }

    public function getGoodsList(Request $request)
    {
        $result = $this->service->getGoodsList($request->all());
        return Response::json($result, 200);
    }
}
