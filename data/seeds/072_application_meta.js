
exports.seed = async function(knex, Promise) {
  await knex('application_meta').del()
  await knex.raw('ALTER SEQUENCE application_meta_id_seq RESTART WITH 1')  
  // Deletes ALL existing entries
    .then(function () {
      // Inserts seed entries
      return knex('application_meta').insert([
        {application_id: 1,name: 'James', street_address:'222 Penn Ave', city:'NYC', state_id:2, zip:'48494', home_phone:'222-222-2222', email:'test@gmail.com', cell_phone: '222-222-2222', is_over_18:true, is_homeowner:true, is_in_agreement:true, is_homevisit_allowed:true, is_fenced:false, ref_name_1:'Bob', ref_phone_1:'222-222-2222', ref_relationship_1:'Brother', ref_name_2:'Mary', ref_phone_2:'222-222-2222', ref_relationship_2:'sister', is_declaration: true},
        {application_id: 2,name: 'Chris', street_address:'222 Penn Ave', city:'NYC', state_id:4, zip:'94094', home_phone:'222-222-2222', email:'test@gmail.com', cell_phone: '222-222-2222', is_over_18:true, is_homeowner:true, is_in_agreement:true, is_homevisit_allowed:true, is_fenced:false, ref_name_1:'Bob', ref_phone_1:'222-222-2222', ref_relationship_1:'Brother', ref_name_2:'Mary', ref_phone_2:'222-222-2222', ref_relationship_2:'sister', is_declaration: true},
        {application_id: 3,name: 'Aruna', street_address:'222 Penn Ave', city:'NYC', state_id:5, zip:'20114', home_phone:'222-222-2222', email:'test@gmail.com', cell_phone: '222-222-2222', is_over_18:true, is_homeowner:true, is_in_agreement:true, is_homevisit_allowed:true, is_fenced:false, ref_name_1:'Bob', ref_phone_1:'222-222-2222', ref_relationship_1:'Brother', ref_name_2:'Mary', ref_phone_2:'222-222-2222', ref_relationship_2:'sister', is_declaration: true},
        {application_id: 4,name: 'Jay', street_address:'222 Penn Ave', city:'NYC', state_id:8, zip:'20009', home_phone:'222-222-2222', email:'test@gmail.com', cell_phone: '222-222-2222', is_over_18:true, is_homeowner:true, is_in_agreement:true, is_homevisit_allowed:true, is_fenced:false, ref_name_1:'Bob', ref_phone_1:'222-222-2222', ref_relationship_1:'Brother', ref_name_2:'Mary', ref_phone_2:'222-222-2222', ref_relationship_2:'sister', is_declaration: true},
        {application_id: 5,name: 'Hung', street_address:'222 Penn Ave', city:'NYC', state_id:9, zip:'20394', home_phone:'222-222-2222', email:'test@gmail.com', cell_phone: '222-222-2222', is_over_18:true, is_homeowner:true, is_in_agreement:true, is_homevisit_allowed:true, is_fenced:false, ref_name_1:'Bob', ref_phone_1:'222-222-2222', ref_relationship_1:'Brother', ref_name_2:'Mary', ref_phone_2:'222-222-2222', ref_relationship_2:'sister', is_declaration: true},
        {application_id: 6,name: 'Sarah', street_address:'222 Penn Ave', city:'NYC', state_id:10, zip:'23022', home_phone:'222-222-2222', email:'test@gmail.com', cell_phone: '222-222-2222', is_over_18:true, is_homeowner:true, is_in_agreement:true, is_homevisit_allowed:true, is_fenced:false, ref_name_1:'Bob', ref_phone_1:'222-222-2222', ref_relationship_1:'Brother', ref_name_2:'Mary', ref_phone_2:'222-222-2222', ref_relationship_2:'sister', is_declaration: true},
        {application_id: 7,name: 'Jimin', street_address:'222 Penn Ave', city:'NYC', state_id:22, zip:'10393', home_phone:'222-222-2222', email:'test@gmail.com', cell_phone: '222-222-2222', is_over_18:true, is_homeowner:true, is_in_agreement:true, is_homevisit_allowed:true, is_fenced:false, ref_name_1:'Bob', ref_phone_1:'222-222-2222', ref_relationship_1:'Brother', ref_name_2:'Mary', ref_phone_2:'222-222-2222', ref_relationship_2:'sister', is_declaration: true},
        {application_id: 8,name: 'Lenna', street_address:'222 Penn Ave', city:'NYC', state_id:23, zip:'23434', home_phone:'222-222-2222', email:'test@gmail.com', cell_phone: '222-222-2222', is_over_18:true, is_homeowner:true, is_in_agreement:true, is_homevisit_allowed:true, is_fenced:false, ref_name_1:'Bob', ref_phone_1:'222-222-2222', ref_relationship_1:'Brother', ref_name_2:'Mary', ref_phone_2:'222-222-2222', ref_relationship_2:'sister', is_declaration: true},
        {application_id: 9,name: 'Kermitt', street_address:'222 Penn Ave', city:'NYC', state_id:24, zip:'43434', home_phone:'222-222-2222', email:'test@gmail.com', cell_phone: '222-222-2222', is_over_18:true, is_homeowner:true, is_in_agreement:true, is_homevisit_allowed:true, is_fenced:false, ref_name_1:'Bob', ref_phone_1:'222-222-2222', ref_relationship_1:'Brother', ref_name_2:'Mary', ref_phone_2:'222-222-2222', ref_relationship_2:'sister', is_declaration: true},
        {application_id: 10,name: 'Ming', street_address:'222 Penn Ave', city:'NYC', state_id:25, zip:'13234', home_phone:'222-222-2222', email:'test@gmail.com', cell_phone: '222-222-2222', is_over_18:true, is_homeowner:true, is_in_agreement:true, is_homevisit_allowed:true, is_fenced:false, ref_name_1:'Bob', ref_phone_1:'222-222-2222', ref_relationship_1:'Brother', ref_name_2:'Mary', ref_phone_2:'222-222-2222', ref_relationship_2:'sister', is_declaration: true}
      ]);
    });
};