import { useState } from 'react';

function UserRegistration() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async () => {
    // Kullanıcı bilgilerini içeren nesneyi oluştur
    const newUser = {
      username: username,
      password: password,
    };

    try {
      // Veritabanına API isteği gönder
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        console.log('Kullanıcı başarıyla kaydedildi!');
      } else {
        console.error('Kullanıcı kaydedilemedi.');
      }
    } catch (error) {
      console.error('API isteği sırasında bir hata oluştu:', error);
    }
  };

  return (
    <div>
      <label>Kullanıcı Adı:</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

      <label>Şifre:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handleRegistration}>Kayıt Ol</button>
    </div>
  );
}

export default UserRegistration;