<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('image');
            $table->bigInteger('price');
            $table->string('category');
            $table->integer('status');
            $table->timestamps();
        });
        DB::table('products')->insert(
            array([
                'name'=>'Premium Sapphire Sufi Necklace',
                'image'=>'item1.jpeg',
                'price'=>'600',
                'category'=>'necklace',
                'status'=>'0'

            ],
           [
                'name'=>'Shreenika Ghungroo Necklace',
                'image'=>'item2.jpeg',
                'price'=>'399',
                'category'=>'necklace',
                'status'=>'0'

           ],[
            'name'=>'Samantha Pearl Necklace',
            'image'=>'item3.jpeg',
            'price'=>'1300',
            'category'=>'necklace',
            'status'=>'0'

       ],[
        'name'=>'Ghungroo Chain',
        'image'=>'item4.jpeg',
        'price'=>'2300',
        'category'=>'necklace',
        'status'=>'0'

   ],[
    'name'=>'Traditional Palakka chain',
    'image'=>'item5.jpeg',
    'price'=>'400',
    'category'=>'necklace',
    'status'=>'0'

],[
    'name'=>'Kemp Aadhya Necklace',
    'image'=>'item6.jpeg',
    'price'=>'900',
    'category'=>'necklace',
    'status'=>'0'

],[
    'name'=>'shirishi Necklace',
    'image'=>'item7.jpeg',
    'price'=>'500',
    'category'=>'necklace',
    'status'=>'0'

],[
    'name'=>'Chitra One Line Necklace',
    'image'=>'item8.jpeg',
    'price'=>'2300',
    'category'=>'necklace',
    'status'=>'0'

],[
    'name'=>'Amritha Kemp Devi Necklace',
    'image'=>'item9.jpeg',
    'price'=>'799',
    'category'=>'necklace',
    'status'=>'0'

],[
    'name'=>'Traditional Maanga Necklace',
    'image'=>'item10.jpeg',
    'price'=>'499',
    'category'=>'necklace',
    'status'=>'0'

],[
    'name'=>'Double Sided Kemp Necklace',
    'image'=>'item11.jpeg',
    'price'=>'3300',
    'category'=>'necklace',
    'status'=>'0'

],[
    'name'=>'Attigai Necklace',
    'image'=>'item12.jpeg',
    'price'=>'700',
    'category'=>'necklace',
    'status'=>'0'

],[
    'name'=>'Parakeet Hasli Necklace',
    'image'=>'item13.jpeg',
    'price'=>'800',
    'category'=>'necklace',
    'status'=>'0'

],[
    'name'=>'Kemp Aadhya Necklace',
    'image'=>'item14.jpeg',
    'price'=>'560',
    'category'=>'necklace',
    'status'=>'0'

],[
    'name'=>'Butterfly Charm Necklace',
    'image'=>'item15.jpeg',
    'price'=>'780',
    'category'=>'necklace',
    'status'=>'0'

],[
    'name'=>' Rutvi Premium Necklace',
    'image'=>'item16.jpeg',
    'price'=>'590',
    'category'=>'necklace',
    'status'=>'0'

],[
    'name'=>'Kemp Mayurikha Earrings',
    'image'=>'item17.jpeg',
    'price'=>'1300',
    'category'=>'earrings',
    'status'=>'0'

],[
    'name'=>'Kemp Devi Studs',
    'image'=>'item18.jpeg',
    'price'=>'400',
    'category'=>'earrings',
    'status'=>'0'

],[
    'name'=>'Lakshmi Jhumkas',
    'image'=>'item19.jpeg',
    'price'=>'899',
    'category'=>'earrings',
    'status'=>'0'

],[
    'name'=>'Mattal Sarojini Jhumkas',
    'image'=>'item20.jpeg',
    'price'=>'3200',
    'category'=>'earrings',
    'status'=>'0'

],[
    'name'=>'Harini Jhumkas',
    'image'=>'item21.jpeg',
    'price'=>'800',
    'category'=>'earrings',
    'status'=>'0'

],[
    'name'=>'Lakshmi Jhumkas',
    'image'=>'item22.jpeg',
    'price'=>'900',
    'category'=>'earrings',
    'status'=>'0'

],[
    'name'=>'Chettinad Jhumkas',
    'image'=>'item23.jpeg',
    'price'=>'400',
    'category'=>'earrings',
    'status'=>'0'

],[
    'name'=>'Nova Jhumkas',
    'image'=>'item24.jpeg',
    'price'=>'600',
    'category'=>'earrings',
    'status'=>'0'

],[
    'name'=>'Lela Jhumkas',
    'image'=>'item25.jpeg',
    'price'=>'750',
    'category'=>'earrings',
    'status'=>'0'

],[
    'name'=>'Siya Jhumkas',
    'image'=>'item26.jpeg',
    'price'=>'500',
    'category'=>'earrings',
    'status'=>'0'

],[
    'name'=>'Azura Kemp Jhumkas',
    'image'=>'item27.jpeg',
    'price'=>'800',
    'category'=>'earrings',
    'status'=>'0'

],[
    'name'=>'AD Jhumkas v1.0',
    'image'=>'item28.jpeg',
    'price'=>'900',
    'category'=>'earrings',
    'status'=>'0'

],[
    'name'=>'Nagas Jhumkas',
    'image'=>'item29.jpeg',
    'price'=>'1000',
    'category'=>'earrings',
    'status'=>'0'

],[
    'name'=>'Glisten Jhumkas',
    'image'=>'item30.jpeg',
    'price'=>'800',
    'category'=>'earrings',
    'status'=>'0'

],[
    'name'=>'Azura Antique Jhumka',
    'image'=>'item31.jpeg',
    'price'=>'700',
    'category'=>'earrings',
    'status'=>'0'

],[
    'name'=>'Kemp GP Jhumka v1.0',
    'image'=>'item32.jpeg',
    'price'=>'600',
    'category'=>'earrings',
    'status'=>'0'

],[
    'name'=>'Ruby Kemp Bangles',
    'image'=>'item33.jpeg',
    'price'=>'300',
    'category'=>'bangles',
    'status'=>'0'

],[
    'name'=>'Antique Devi Bangles ',
    'image'=>'item34.jpeg',
    'price'=>'300',
    'category'=>'bangles',
    'status'=>'0'

],[
    'name'=>'Antique Bangles',
    'image'=>'item35.jpeg',
    'price'=>'300',
    'category'=>'bangles',
    'status'=>'0'

],
[
    'name'=>'Maanvi Kemp Bangles',
    'image'=>'item36.jpeg',
    'price'=>'300',
    'category'=>'bangles',
    'status'=>'0'

],[
    'name'=>'Pastel Gold Plated Bangles',
    'image'=>'item37.jpeg',
    'price'=>'300',
    'category'=>'bangles',
    'status'=>'0'

],[
    'name'=>'Ruby Gold Plated Bangles',
    'image'=>'item38.jpeg',
    'price'=>'300',
    'category'=>'bangles',
    'status'=>'0'

],[
    'name'=>'White Gold Plated Bangles ',
    'image'=>'item39.jpeg',
    'price'=>'300',
    'category'=>'bangles',
    'status'=>'0'

],[
    'name'=>'Matt Flora Bangles',
    'image'=>'item40.jpeg',
    'price'=>'300',
    'category'=>'bangles',
    'status'=>'0'

],[
    'name'=>'AD Gold Plated Bangles',
    'image'=>'item41.jpeg',
    'price'=>'700',
    'category'=>'bangles',
    'status'=>'0'

],[
    'name'=>'Free Size AD Bracelete',
    'image'=>'item42.jpeg',
    'price'=>'800',
    'category'=>'bangles',
    'status'=>'0'

],[
    'name'=>'Single Kemp Kada',
    'image'=>'item43.jpeg',
    'price'=>'700',
    'category'=>'bangles',
    'status'=>'0'

],[
    'name'=>'Budgeted AD Bangles',
    'image'=>'item44.jpeg',
    'price'=>'500',
    'category'=>'bangles',
    'status'=>'0'

],[
    'name'=>'Devi Kada bangle',
    'image'=>'item45.jpeg',
    'price'=>'600',
    'category'=>'bangles',
    'status'=>'0'

],[
    'name'=>'Premium AD Bangles',
    'image'=>'item46.jpeg',
    'price'=>'500',
    'category'=>'bangles',
    'status'=>'0'

],[
    'name'=>'Budgeted Kemp Premium Bangles',
    'image'=>'item47.jpeg',
    'price'=>'490',
    'category'=>'bangles',
    'status'=>'0'

],[
    'name'=>'Emerald Antique Bangles',
    'image'=>'item48.jpeg',
    'price'=>'360',
    'category'=>'bangles',
    'status'=>'0'

],[
    'name'=>'Double Sided Kemp Anklets',
    'image'=>'item49.jpeg',
    'price'=>'200',
    'category'=>'anklets',
    'status'=>'0'

],[
    'name'=>'Flora Anklets ',
    'image'=>'item50.jpeg',
    'price'=>'100',
    'category'=>'anklets',
    'status'=>'0'

],[
    'name'=>'Tear Drop Anklets',
    'image'=>'item51.jpeg',
    'price'=>'600',
    'category'=>'anklets',
    'status'=>'0'

],[
    'name'=>'Premium Sarojini Jadua Anklets',
    'image'=>'item52.jpeg',
    'price'=>'900',
    'category'=>'anklets',
    'status'=>'0'

],[
    'name'=>'Gold lookalike Anklets',
    'image'=>'item53.jpeg',
    'price'=>'800',
    'category'=>'anklets',
    'status'=>'0'

],[
    'name'=>'Premium Jadua Anklets',
    'image'=>'item54.jpeg',
    'price'=>'700',
    'category'=>'anklets',
    'status'=>'0'

],[
    'name'=>'Kemp Lotus Anklets',
    'image'=>'item55.jpeg',
    'price'=>'200',
    'category'=>'anklets',
    'status'=>'0'

],[
    'name'=>'Kemp Lotus Anklets',
    'image'=>'item56.jpeg',
    'price'=>'800',
    'category'=>'anklets',
    'status'=>'0'

],[
    'name'=>'Golden Bead Anklets',
    'image'=>'item57.jpeg',
    'price'=>'400',
    'category'=>'anklets',
    'status'=>'0'

],[
    'name'=>'Kemp Anklet',
    'image'=>'item58.jpeg',
    'price'=>'600',
    'category'=>'anklets',
    'status'=>'0'

],[
    'name'=>'AD flora anklets',
    'image'=>'item59.jpeg',
    'price'=>'500',
    'category'=>'anklets',
    'status'=>'0'

],[
    'name'=>'AD stone Anklet',
    'image'=>'item60.jpeg',
    'price'=>'800',
    'category'=>'anklets',
    'status'=>'0'

],[
    'name'=>'Emerald Kemp Stone Anklets',
    'image'=>'item61.jpeg',
    'price'=>'400',
    'category'=>'anklets',
    'status'=>'0'

]
            )
            );
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
