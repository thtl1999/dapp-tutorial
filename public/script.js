async function display_addr(person){
    const contract_addr = '0x9Cb01B2D00F8eB0BABD65515a260E085cC03aD1d'

    const abi_data = await fetch('abi.json')
    const abi = await abi_data.json()

    const contract = web3.eth.contract(abi).at(contract_addr)

    if (person === 'A'){
        contract.a_addr({},function(err, res){
            change_result(res)
        })
    }
    else if (person === 'B'){
        contract.b_addr({},function(err, res){
            change_result(res)
        })
    }
}

function change_result(addr){
    var target_tag = document.getElementById('result')
    target_tag.innerHTML = addr
}


// function calculate_long(value, callback){
//     var new_value = value
//     return callback(new_value)
// }

// function calculate_short(value, callback){
//     var new_value = value
//     return callback(new_value)
// }

// var total = 0

// calculate_long(200, function(res){
//     total += res

//     calculate_short(50, function(res){
//         total += res

//         console.log(total)
//     })
// })