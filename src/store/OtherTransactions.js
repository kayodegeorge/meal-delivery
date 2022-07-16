
export const OtherTransactions = {
    state:{

        otherTransactions:[
            {
                id: 1,
                name:'Bill Payments'
            },
            {
                id: 2,
                name:'Referral points'
            },
            {
                id: 3,
                name:'Fund Transfers'
            },
            {
              id:4,
              name:'Daily Contributions'
            }
    
            
        ],
        otherTransactionById:{}
    
    },
    
    getters:{
        allTransactions: (state) => state.otherTransactions
    
    },
    
    actions:{
        GetOtherTransById: ({commit}, trans)=>{
            commit('SetOtherTransactionById', trans)
        }
    },
    
    mutations:{
        SetOtherTransactionById(state, data){
            state.otherTransactionById = data
        }
    }
    
} 