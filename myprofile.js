
            document.getElementById('saveBtn').addEventListener('click', function (e) {
              e.preventDefault(); 
          
              
              const firstName = document.getElementById('FirstName').value;
              const lastName = document.getElementById('LastName').value;
              const phone = document.getElementById('Phone').value;
              const email = document.getElementById('Email').value;
          
              const userData = {
                firstName,
                lastName,
                phone,
                email
              };
          
              
              localStorage.setItem('userProfile', JSON.stringify(userData));
          
              alert('Profile saved successfully!');
            });
          
            
            window.addEventListener('DOMContentLoaded', () => {
              const savedData = JSON.parse(localStorage.getItem('userProfile'));
              if (savedData) {
                document.getElementById('FirstName').value = savedData.firstName || '';
                document.getElementById('LastName').value = savedData.lastName || '';
                document.getElementById('Phone').value = savedData.phone || '';
                document.getElementById('Email').value = savedData.email || '';
              }
            });


            document.getElementById('changeBtn').addEventListener('click', function () {
  
  document.getElementById('FirstName').value = '';
  document.getElementById('LastName').value = '';
  document.getElementById('Phone').value = '';
  document.getElementById('Email').value = '';

  
});
        