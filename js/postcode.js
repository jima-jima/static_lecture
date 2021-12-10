// ES6の書き方だ

// 変数
var bird ="ひよこ"
console.log(bird + "さんこんにちは");
bird ="にわとり"
console.log(bird + "さんこんにちは");

// ES6からはvarじゃなくてletで書く。letの方がすごい（？）
// let bird="ひよこ"

// 定数（ES6から使えるようになった書き方）
// constを使うと変数のように再代入はできない(元気じゃなくなるはwillに再代入できない)
const will="元気でいる";
console.log(will);
// will="元気じゃなくなる";
// console.log(will);

// 関数
// アロー関数(arrow＝矢) 今までみたいにfunctionとか書かない
let triangle=(a,b)=>{
    console.log(a*b/2);
};
triangle(5,4);

// グローバル変数とローカル変数
// 関数の中で定義するとローカル。その関数の中でしか使えない
// 関数の外に書くとグローバル。どこでも使える


$(function(){
    // submitがclickされたら
    $("#submit").click(function(e) {
    
        // ページの再度読み込みを止める
        e.preventDefault();
    
        // 入力した郵便番号を取得する
        let post_code=$("#post_code").val();
        console.log(post_code);
    
        // APIにアクセス、URLの？マーク以降はパラメータ
        let zip_url=`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${post_code}`
        console.log(zip_url);
    
        // 
        fetch(zip_url)
            // .then(function(response){
            //     return response.json();
            // })

            .then(response=>response.json())

            .then((data)=>{
                console.log(data);
                let message=data['message'];
                console.log(message);

                if(message==null){
                    if(data['results']==null){
                        $("#test").text("存在しない郵便番号です");
                    }else{
                    let result=data['results'][0];
                    console.log(result);
                    let prefecture=result['address1'];
                    let city=result['address2'];
                    let town=result['address3'];
                    console.log(prefecture);

                    $("#prefecture").val(prefecture);
                    $('#test').text("");
                    }
                }else{
                    console.log("nullのとき");
                    $("#test").text("桁数を確認して下さい");
                }                

            })                
    })
});