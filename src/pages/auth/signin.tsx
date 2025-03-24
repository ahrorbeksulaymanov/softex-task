import { Button, Form, FormProps, Input } from "antd";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/auth/authSlice";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import TSLOGO from '../../assets/images/ts-logo.png';
import { UserIcon } from "../../components/icons";

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const SignInPage = () => {

    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        if(values?.password === '12345' && values?.username === "admin"){
            dispatch(setUser({ username: "Admin" }));
        } else {
            form.setFields([
                {
                  name: "username",
                  errors: ["Login yoki parol noto‘g‘ri!"],
                },
                {
                  name: "password",
                  errors: [""],
                },
            ]);
        }
    };

    return (
        <div className="flex h-screen w-full">
            <div className="w-[55.5%] bg-primary flex justify-center items-center max-lg:hidden">
                <img src={TSLOGO} alt="" />
            </div>
            <div className="lg:w-[55.5%] w-full flex justify-center items-center">
                <Form
                    form={form}
                    name="Auth form"
                    layout="vertical"
                    onFinish={onFinish}
                    autoComplete="off"
                    className="sm:min-w-[420px] sm:max-w-[90%] max-sm:w-[90%]"
                >
                    <h1 className="text-[45px] font-normal text-[#344054] mb-[45px] text-center">Sign in</h1>
                    <Form.Item
                        label="Login "
                        name="username"
                        rules={[{ required: true, message: 'Pleace write login!' }]}
                    >
                        <Input 
                            suffix={<UserIcon />} 
                            className="h-[45px] bg-white"
                            placeholder="Pleace write login"
                        />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Pleace write password!' }]}
                    >
                        <Input.Password 
                            className="h-[45px] bg-white"
                            placeholder="Pleace write password"
                            iconRender={(visible) =>
                                visible ? (
                                  <EyeOutlined style={{ fontSize: "20px", color: "#98A2B3" }} />
                                ) : (
                                  <EyeInvisibleOutlined style={{ fontSize: "20px", color: "#98A2B3" }} />
                                )
                            }
                        />
                    </Form.Item>
                    <Form.Item label={null}>
                        <Button className="w-full !h-[45px]" type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
export default SignInPage;