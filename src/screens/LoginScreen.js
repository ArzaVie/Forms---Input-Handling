import { View, Button, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import { FormInput } from '../components/FormInput';
import { LoginSchema } from '../utils/validationSchemas';

export default function LoginScreen() {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      console.log('Login Success:', values);
      alert('Login Berhasil!');
    },
  });

  return (
    <View style={styles.container}>
      <FormInput
        label="Email"
        placeholder="Masukkan email"
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        value={values.email}
        error={errors.email}
        touched={touched.email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <FormInput
        label="Password"
        placeholder="Masukkan password"
        secureTextEntry
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        value={values.password}
        error={errors.password}
        touched={touched.password}
      />
      <View style={{ marginTop: 10 }}>
        <Button title="Login" onPress={handleSubmit} color="#bb86fc" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    padding: 20, 
    flex: 1, 
    backgroundColor: '#121212', 
    justifyContent: 'center' 
  },
});