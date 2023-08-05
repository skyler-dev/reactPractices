import { useForm } from 'react-hook-form';

function LoginFormWithReactHookForm({ addUser }) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors },
  } = useForm();
  //  {"email":"qq@gmail.com","password":"123"}
  const registerOptions = {
    email: {
      required: '이메일은 필수 입력입니다.',
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: '이메일 형식에 맞지 않습니다.',
      },
    },
    password: {
      required: '비밀번호는 필수 입력입니다.',
      minLength: {
        value: 7,
        message: '7자리 이상의 비밀번호를 사용하세요.',
      },
    },
  };

  const style = {
    form: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    div: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    label: {
      flexGrow: '1',
    },
    input: {
      flexGrow: '3',
    },
    message: {
      textAlign: 'end',
    },
  };

  return (
    <form
      style={style.form}
      noValidate
      onSubmit={handleSubmit(async (data) => {
        await new Promise((r) => setTimeout(r, 1000)); // 중복 제출 방지 시각화
        return addUser(data);
      })}
    >
      <div style={style.div}>
        <label style={style.label} htmlFor='email'>
          이메일
        </label>
        <input
          style={style.input}
          id='email'
          type='email'
          placeholder='test@email.com'
          aria-invalid={
            isSubmitted ? (errors.email ? 'true' : 'false') : undefined
          }
          {...register('email', registerOptions.email)}
        />
      </div>
      {errors.email && (
        <small style={style.message} role='alert'>
          {errors.email.message}
        </small>
      )}

      <div style={style.div}>
        <label style={style.label} htmlFor='password'>
          비밀번호
        </label>
        <input
          style={style.input}
          id='password'
          type='password'
          placeholder='*******'
          aria-invalid={
            isSubmitted ? (errors.password ? 'true' : 'false') : undefined
          }
          {...register('password', registerOptions.password)}
        />
      </div>
      {errors.password && (
        <small style={style.message} role='alert'>
          {errors.password.message}
        </small>
      )}

      <button type='submit' disabled={isSubmitting}>
        로그인
      </button>
    </form>
  );
}

export default LoginFormWithReactHookForm;
