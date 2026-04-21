import React, { useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Platform, Button, Image, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import * as ImagePicker from 'expo-image-picker';
import { FormInput } from '../components/FormInput';
import { RegisterSchema } from '../utils/validationSchemas';

export default function RegisterScreen() {
  const [image, setImage] = useState(null);

  const formik = useFormik({
    initialValues: { nama: '', email: '', phone: '', password: '', confirmPassword: '' },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      console.log('Data Registrasi:', { ...values, profileImage: image });
      alert('Registrasi Berhasil!');
    },
  });

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
    });
    if (!result.canceled) setImage(result.assets[0].uri);
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1, backgroundColor: '#121212' }}
    >
      <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ padding: 20 }}>
        <Button title="Pilih Foto Profil" onPress={pickImage} color="#bb86fc" />
        
        {image && (
          <Image 
            source={{ uri: image }} 
            style={{ width: 100, height: 100, borderRadius: 50, alignSelf: 'center', marginVertical: 15 }} 
          />
        )}

        <FormInput
          label="Nama Lengkap"
          onChangeText={formik.handleChange('nama')}
          onBlur={formik.handleBlur('nama')}
          value={formik.values.nama}
          error={formik.errors.nama}
          touched={formik.touched.nama}
        />

        <FormInput
          label="Email"
          onChangeText={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
          value={formik.values.email}
          error={formik.errors.email}
          touched={formik.touched.email}
          keyboardType="email-address"
        />

        <FormInput
          label="Nomor Telepon"
          onChangeText={formik.handleChange('phone')}
          onBlur={formik.handleBlur('phone')}
          value={formik.values.phone}
          error={formik.errors.phone}
          touched={formik.touched.phone}
          keyboardType="numeric"
        />

        <FormInput
          label="Password"
          secureTextEntry
          onChangeText={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
          value={formik.values.password}
          error={formik.errors.password}
          touched={formik.touched.password}
        />

        <FormInput
          label="Konfirmasi Password"
          secureTextEntry
          onChangeText={formik.handleChange('confirmPassword')}
          onBlur={formik.handleBlur('confirmPassword')}
          value={formik.values.confirmPassword}
          error={formik.errors.confirmPassword}
          touched={formik.touched.confirmPassword}
        />

        <View style={{ marginTop: 20 }}>
          <Button title="Register" onPress={formik.handleSubmit} color="#03dac6" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}