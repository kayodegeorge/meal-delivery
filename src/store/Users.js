export const Users={

    state:{
        desserts: [
            {
              id: '080000000',
              name: 'Ola Aina',
              totalpoints: 60,
              level: 'bronze',
              
            },
            {
              id: '080111111',
              name: 'James Olayinka',
              totalpoints: 70,
              level: 'bronze',
            },
            {
             id: '080222222',
              name: 'Bukayo Saka',
              totalpoints: 80,
              level: 'bronze',
            },
            {
              id: '080333333',
              name: 'Tega Kevin',
              totalpoints: 90,
              level: 'bronze',
            },
            {
              id: '080444444',
              name: 'Ansu Fati',
              totalpoints: 100,
              level: 'silver',
            },
            {
              id: '080555555',
              name: 'Mason Greenwood',
              totalpoints: 110,
              level: 'silver',
            },
            {
              id: '080555555',
              name: 'Liam Delap',
              totalpoints: 120,
              level: 'silver',
            },
            {
             id: '080666666',
              name: 'Jude Bellingham',
              totalpoints: 130,
              level: 'silver',
            },
            {
              id: '080777777',
              name: 'Edward Nketiah',
              totalpoints: 140,
              level: 'silver',
            },
            
          ],

          userDetails:{},
    },

    getters:{

    },

    actions:{

    },
    mutations:{
      UserDetails(state, item){
           state.userDetails = item
      }
    }
}