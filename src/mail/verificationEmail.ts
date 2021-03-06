import {IUser} from '../interfaces/IUser'
import config from '../config'

export default function verificationEmail(user: Partial<IUser>) {
  return `<!DOCTYPE html>
            <html>
            <head>
                <meta name="viewport" content="width=device-width">
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                <title>Email verification - My Study Planner</title>
                <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet">
                <style>
            @media only screen and (max-width: 620px) {
            table[class="body"] h1 {
                font-size: 28px !important;
                margin-bottom: 10px !important;
            }

            table[class="body"] p,
            table[class="body"] ul,
            table[class="body"] ol,
            table[class="body"] td,
            table[class="body"] span,
            table[class="body"] a {
                font-size: 16px !important;
            }

            table[class="body"] .wrapper,
            table[class="body"] .article {
                padding: 10px !important;
            }

            table[class="body"] .content {
                padding: 0 !important;
            }

            table[class="body"] .container {
                padding: 0 !important;
                width: 100% !important;
            }

            table[class="body"] .main {
                border-left-width: 0 !important;
                border-radius: 0 !important;
                border-right-width: 0 !important;
            }

            table[class="body"] .btn table {
                width: 100% !important;
            }

            table[class="body"] .btn a {
                width: 100% !important;
            }

            table[class="body"] .img-responsive {
                height: auto !important;
                max-width: 100% !important;
                width: auto !important;
            }
            }
            @media all {
            .ExternalClass {
                width: 100%;
            }

            .ExternalClass,
            .ExternalClass p,
            .ExternalClass span,
            .ExternalClass font,
            .ExternalClass td,
            .ExternalClass div {
                line-height: 100%;
            }

            .apple-link a {
                color: inherit !important;
                font-family: inherit !important;
                font-size: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
                text-decoration: none !important;
            }

            #MessageViewBody a {
                color: inherit;
                text-decoration: none;
                font-size: inherit;
                font-family: inherit;
                font-weight: inherit;
                line-height: inherit;
            }

            .btn-primary table td:hover {
                background-color: #DB8C2E !important;
            }

            .btn-primary a:hover {
                background-color: #DB8C2E !important;
                border-color: #DB8C2E !important;
            }
            }
            </style>
            </head>
            <body class="" style="background-color: #f6f6f6; font-family: 'Raleway', sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
                <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">This is preheader text. Some clients will show this text as a
                preview.</span>
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-spacing: 0; background-color: #f6f6f6; width: 100%;" width="100%" bgcolor="#f6f6f6">
                <tr>
                    <td style="font-family: 'Raleway', sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>
                    <td class="container" style="font-family: 'Raleway', sans-serif; font-size: 14px; vertical-align: top; display: block; max-width: 580px; padding: 10px; width: 580px; margin: 0 auto;" width="580" valign="top">
                    <div class="content" style="box-sizing: border-box; display: block; margin: 0 auto; max-width: 580px; padding: 10px;">
                        <!-- START CENTERED WHITE CONTAINER -->
                        <table role="presentation" class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-spacing: 0; background: #ffffff; border-radius: 3px; margin-top: 30px; width: 100%;" width="100%">
                        <!-- START MAIN CONTENT AREA -->
                        <tr>
                            <td class="wrapper" style="font-family: 'Raleway', sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 0;" valign="top">
                            <img src="https://i.ibb.co/cxm9GFd/trED9jQr.png" alt="My Study Planner banner" width="auto" height="auto" border="0" style="-ms-interpolation-mode: bicubic; max-width: 100%; border: 0; outline: none; text-decoration: none; display: block;">
                            <table class="wrapper-table" role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; border-spacing: 0; padding: 20px;" width="100%">
                                <tr>
                                <td style="font-family: 'Raleway', sans-serif; font-size: 14px; vertical-align: top;" valign="top">
                                    <h1 style="font-family: 'Raleway', sans-serif; line-height: 1.4; margin: 0; margin-bottom: 30px; font-size: 35px; color: #00adb5; font-weight: 400; text-align: center; text-transform: capitalize;">Email Confirmation</h1>
                                    <p style="font-family: 'Raleway', sans-serif; font-size: 16px; margin: 0; margin-bottom: 50px; text-align: center; font-weight: 300; letter-spacing: 1px; line-height: 30px;">
                                    Hey ${user.name}! Thank you for signing up. You're almost
                                    ready to start your journey at <b>My Study Planner!</b>
                                    Simply click the button below to verify your email
                                    address.
                                    </p>
                                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-spacing: 0; box-sizing: border-box; width: 100%;" width="100%">
                                    <tbody>
                                        <tr>
                                        <td align="left" style="font-family: 'Raleway', sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px;" valign="top">
                                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-spacing: 0; width: auto; margin: 0 auto;">
                                            <tbody>
                                                <tr>
                                                <td style="font-family: 'Raleway', sans-serif; font-size: 14px; vertical-align: top; border-radius: 8px; text-align: center; background-color: #ffb03f;" valign="top" align="center" bgcolor="#ffb03f">
                                                    <a href="${config.serverUrl}/api/auth/verification?token=${user.verificationToken}&email=${user.email}" target="_blank" style="border: solid 1px #ffb03f; border-radius: 12px; box-sizing: border-box; cursor: pointer; display: inline-block; font-size: 14px; font-weight: bold; margin: 0; padding: 12px 25px; text-decoration: none; text-transform: capitalize; background-color: #ffb03f; border-color: #ffb03f; color: #ffffff;">VERIFY EMAIL ADDRESS</a>
                                                </td>
                                                </tr>
                                            </tbody>
                                            </table>
                                        </td>
                                        </tr>
                                    </tbody>
                                    </table>                        
                                </td>
                                </tr>
                            </table>
                            </td>
                        </tr>

                        <!-- END MAIN CONTENT AREA -->
                        </table>

                        <!-- END CENTERED WHITE CONTAINER -->

                        <!-- START FOOTER -->
                        <div class="footer" style="clear: both; margin-top: 10px; text-align: center; width: 100%;">
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; border-spacing: 0;" width="100%">
                            <tr>
                            <td class="content-block" style="font-family: 'Raleway', sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; color: #999999; font-size: 12px; text-align: center;" valign="top" align="center">
                                <span class="apple-link" style="color: #999999; font-size: 12px; text-align: center;">This is an auto-generated email. Please do not reply.</span>   
                            <br>
                            <br>
                            Copyright &copy; 2019 Jose Felix                
                            </td>
                            </tr>               
                        </table>
                        </div>
                        <!-- END FOOTER -->
                    </div>
                    </td>
                    <td style="font-family: 'Raleway', sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>
                </tr>
                </table>
            </body>
            </html>
            `
}
