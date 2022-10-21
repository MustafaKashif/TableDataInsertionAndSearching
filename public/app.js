var studentInfo = [{
    name: 'Mustafa',
    rollNo: '01',
    phoneNumber: '03172095176',
    age : '20',
},
{
    name: 'Kashif',
    rollNo: '02',
    phoneNumber: '03172095187',
    age : '21',
},
{
    name: 'Mehmood Ahmed',
    rollNo: '03',
    phoneNumber: '03172095197',
    age : '23',
},
{
    name: 'Rohaan',
    rollNo: '04',
    phoneNumber: '03172095108',
    age : '22',
},
{
    name: 'Arsalan',
    rollNo: '05',
    phoneNumber: '03172095119',
    age : '26',
},
{
    name: 'Haseeb',
    rollNo: '06',
    phoneNumber: '03172095120',
    age : '20',
},
{
    name: 'Sikandar',
    rollNo: '07',
    phoneNumber: '03172095131',
    age : '19',
},
{
    name: 'Hamza',
    rollNo: '08',
    phoneNumber: '03172095142',
    age : '24',
},
{
    name: 'Abdullah',
    rollNo: '09',
    phoneNumber: '03172095153',
    age : '25',
},
{
    name: 'Akhtar',
    rollNo: '10',
    phoneNumber: '03172095163',
    age : '30',
}
];

tableInsertion();


function tableInsertion(){
var table = document.getElementById('table');
for(var m = 0; m < studentInfo.length; m++){
    var data = `<tr>
    <td>${studentInfo[m].name}</td>
    <td>${studentInfo[m].rollNo}</td>
    <td>${studentInfo[m].phoneNumber}</td>
    <td>${studentInfo[m].age}</td>
    </tr>`
    table.innerHTML += data;
}
}

function searchBar(){
    var input = document.getElementById('searchBar');
    var table = document.getElementById('table');
    var tr = table.getElementsByTagName('tr');

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
          var textValue= td.innerHTML;
          if (textValue.indexOf(input.value) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }
