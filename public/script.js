async function display_addr(person){
    const contract_addr = '0x8dc3A51DE3eBCddD9379e51B453232Edb05B2d20'

    const abi_data = await fetch('abi.json')
    const abi = await abi_data.json()

    const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io'))
    const contract = new web3.eth.Contract(abi, contract_addr)

    if (person === 'A'){
        contract.methods.a_addr().call({},function(err, res){
            change_result(res)
        })
    }
    else if (person === 'B'){
        contract.methods.b_addr().call({},function(err, res){
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