import * as Yup from 'yup';

// Schema untuk Login 
export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Format email tidak valid') 
    .required('Email wajib diisi'), 
  password: Yup.string()
    .min(6, 'Minimal 6 karakter') 
    .required('Password wajib diisi'), 
});

// Schema untuk Registrasi
export const RegisterSchema = Yup.object().shape({
  nama: Yup.string()
    .min(3, 'Minimal 3 karakter') 
    .required('Nama wajib diisi'), 
  email: Yup.string()
    .email('Format email tidak valid') 
    .required('Email wajib diisi'), 
  phone: Yup.string()
    .required('Nomor telepon wajib diisi'), 
  password: Yup.string()
    .min(8, 'Minimal 8 karakter') 
    .matches(/[A-Z]/, 'Harus ada huruf kapital')
    .required('Password wajib diisi'), 
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Password tidak cocok') 
    .required('Konfirmasi password wajib'), 
});