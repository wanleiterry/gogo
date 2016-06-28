<?php

namespace App\Services;

use App\Models\Goods;

class GoodsService
{
    private $offset = 0;
    private $limit  = 10;

    public function __construct()
    {

    }

    public function getGoodsList($params)
    {
        $offset = isset($params['offset']) && is_numeric($params['offset']) ? $params['offset'] : $this->offset;
        $limit  = isset($params['limit']) && is_numeric($params['limit']) ? $params['limit'] : $this->limit;

        $data['_count'] = Goods::count(); 
        $data['data']   = Goods::skip($offset)->take($limit)->get();
        return $data;
    }
}