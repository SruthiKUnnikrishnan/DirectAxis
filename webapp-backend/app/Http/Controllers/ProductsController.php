<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\products;

class ProductsController extends Controller
{
    public function select(){
        $product=products::select()->get();
        return $product;
    }
    public function selectProduct($id)
    {   
        $product=products::where('id',$id)->select()->get();
        return $product;
    }
}
