package br.com.app.kirvano;

import android.Manifest;
import android.content.pm.PackageManager;
import android.os.Build;
import android.util.Log;
import android.widget.Toast;

import androidx.annotation.RequiresApi;
import androidx.core.content.ContextCompat;

import com.acesso.acessobio_android.AcessoBioListener;
import com.acesso.acessobio_android.iAcessoBioDocument;
import com.acesso.acessobio_android.iAcessoBioSelfie;
import com.acesso.acessobio_android.onboarding.AcessoBio;
import com.acesso.acessobio_android.onboarding.IAcessoBioBuilder;
import com.acesso.acessobio_android.onboarding.camera.CameraListener;
import com.acesso.acessobio_android.onboarding.camera.UnicoCheckCamera;
import com.acesso.acessobio_android.onboarding.camera.UnicoCheckCameraOpener;
import com.acesso.acessobio_android.onboarding.camera.document.DocumentCameraListener;
import com.acesso.acessobio_android.onboarding.types.DocumentType;
import com.acesso.acessobio_android.services.dto.ErrorBio;
import com.acesso.acessobio_android.services.dto.ResultCamera;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import java.util.logging.Logger;

import br.com.app.kirvano.UnicoConfigDefault;

import static androidx.core.app.ActivityCompat.requestPermissions;

public class UnicoCheckModule extends ReactContextBaseJavaModule implements AcessoBioListener, iAcessoBioSelfie, iAcessoBioDocument {

    private static ReactApplicationContext reactContext;
    private static Logger logger = Logger.getLogger(UnicoCheckModule.class.getName());
    private static UnicoConfigDefault unicoConfigDefault = new UnicoConfigDefault();
    private static UnicoConfigLiveness unicoConfigLiveness  = new UnicoConfigLiveness();
    private static UnicoTheme unicoTheme  = new UnicoTheme();

    protected static final int REQUEST_CAMERA_PERMISSION = 1;

    public enum CameraMode {
        SMART,
        DEFAULT,
        LIVENESS,
        DOCUMENT_FRONT,
        DOCUMENT_BACK,
        IDENTITY_FRONT,
        IDENTITY_BACK
    }

    private IAcessoBioBuilder acessoBioBuilder;
    private UnicoCheckCamera unicoCheckCamera;

    UnicoCheckModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @Override
    public String getName() {
        return "UnicoCheckModule";
    }

    @ReactMethod
    public void addListener(String eventName) {
        // Keep: Required for RN built in Event Emitter Calls.
    }

    @ReactMethod
    public void removeListeners(Integer count) {
        // Keep: Required for RN built in Event Emitter Calls.
    }

    @ReactMethod
    public void show(String message, Callback errorCallback, Callback successCallback) {
        successCallback.invoke(message);
    }

    @RequiresApi(api = Build.VERSION_CODES.M)
    @ReactMethod
    private void callSmartCamera() {
        this.openCamera(CameraMode.SMART);
    }

    @RequiresApi(api = Build.VERSION_CODES.M)
    @ReactMethod
    private void callDefaultCamera() {
        this.openCamera(CameraMode.DEFAULT);
    }

    @RequiresApi(api = Build.VERSION_CODES.M)
    @ReactMethod
    private void callLivenessCamera() {
        this.openCamera(CameraMode.LIVENESS);
    }

    @RequiresApi(api = Build.VERSION_CODES.M)
    @ReactMethod
    private void callDocumentFrontCamera() {
        this.openCamera(CameraMode.DOCUMENT_FRONT);
    }

    @RequiresApi(api = Build.VERSION_CODES.M)
    @ReactMethod
    private void callDocumentBackCamera() {
        this.openCamera(CameraMode.DOCUMENT_BACK);
    }

    @RequiresApi(api = Build.VERSION_CODES.M)
    @ReactMethod
    private void callIdentityFrontCamera() {
      this.openCamera(CameraMode.IDENTITY_FRONT);
    }

    @RequiresApi(api = Build.VERSION_CODES.M)
    @ReactMethod
    private void callIdentityBackCamera() {
      this.openCamera(CameraMode.IDENTITY_BACK);
    }

    @RequiresApi(api = Build.VERSION_CODES.M)
    @ReactMethod
    private void build(boolean hasSmart) {
        acessoBioBuilder = new AcessoBio(getCurrentActivity(), UnicoCheckModule.this);
        unicoCheckCamera = acessoBioBuilder.setSmartFrame(hasSmart).setAutoCapture(hasSmart).setTheme(unicoTheme).build();
    }

    @RequiresApi(api = Build.VERSION_CODES.M)
    private void openCamera(CameraMode mode) {
        if (hasPermission()) {

            getCurrentActivity().runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    if (mode == CameraMode.SMART) {
                        build(true);
                        unicoCheckCamera.prepareCamera(unicoConfigDefault, new CameraListener() {

                            @Override
                            public void onCameraReady(UnicoCheckCameraOpener.Camera cameraOpener) {
                                cameraOpener.open(UnicoCheckModule.this);
                            }

                            @Override
                            public void onCameraFailed(String message) {
                                Toast.makeText(getCurrentActivity(), message, Toast.LENGTH_LONG).show();
                            }
                        });
                    } else if (mode == CameraMode.DEFAULT) {
                        build(false);
                        unicoCheckCamera.prepareCamera(unicoConfigDefault, new CameraListener() {
                            @Override
                            public void onCameraReady(UnicoCheckCameraOpener.Camera cameraOpener) {
                                cameraOpener.open(UnicoCheckModule.this);
                            }

                            @Override
                            public void onCameraFailed(String message) {
                                Toast.makeText(getCurrentActivity(), message, Toast.LENGTH_LONG).show();
                            }
                        });
                    } else if (mode == CameraMode.LIVENESS) {
                        build(false);
                        unicoCheckCamera.prepareCamera(unicoConfigLiveness, new CameraListener() {
                            @Override
                            public void onCameraReady(UnicoCheckCameraOpener.Camera cameraOpener) {
                                cameraOpener.open(UnicoCheckModule.this);
                            }

                            @Override
                            public void onCameraFailed(String message) {
                                Toast.makeText(getCurrentActivity(), message, Toast.LENGTH_LONG).show();
                            }
                        });
                    } else if (mode == CameraMode.DOCUMENT_FRONT) {
                        build(false);
                        unicoCheckCamera.prepareDocumentCamera(unicoConfigDefault, new DocumentCameraListener() {
                            @Override
                            public void onCameraReady(UnicoCheckCameraOpener.Document cameraOpener) {
                                cameraOpener.open(DocumentType.CNH_FRENTE, UnicoCheckModule.this);
                            }

                            @Override
                            public void onCameraFailed(String message) {
                                Toast.makeText(getCurrentActivity(), message, Toast.LENGTH_LONG).show();
                            }
                        });
                    } else if (mode == CameraMode.DOCUMENT_BACK){
                        build(false);
                        unicoCheckCamera.prepareDocumentCamera(unicoConfigDefault, new DocumentCameraListener() {
                            @Override
                            public void onCameraReady(UnicoCheckCameraOpener.Document cameraOpener) {
                                cameraOpener.open(DocumentType.CNH_VERSO, UnicoCheckModule.this);
                            }

                            @Override
                            public void onCameraFailed(String message) {
                                Toast.makeText(getCurrentActivity(), message, Toast.LENGTH_LONG).show();
                            }
                        });
                    } else if (mode == CameraMode.IDENTITY_FRONT){
                        build(false);
                        unicoCheckCamera.prepareDocumentCamera(unicoConfigDefault, new DocumentCameraListener() {
                            @Override
                            public void onCameraReady(UnicoCheckCameraOpener.Document cameraOpener) {
                                cameraOpener.open(DocumentType.RG_FRENTE, UnicoCheckModule.this);
                            }

                            @Override
                            public void onCameraFailed(String message) {
                                Toast.makeText(getCurrentActivity(), message, Toast.LENGTH_LONG).show();
                            }
                        });
                    } else if (mode == CameraMode.IDENTITY_BACK){
                        build(false);
                        unicoCheckCamera.prepareDocumentCamera(unicoConfigDefault, new DocumentCameraListener() {
                            @Override
                            public void onCameraReady(UnicoCheckCameraOpener.Document cameraOpener) {
                                cameraOpener.open(DocumentType.RG_VERSO, UnicoCheckModule.this);
                            }

                            @Override
                            public void onCameraFailed(String message) {
                                Toast.makeText(getCurrentActivity(), message, Toast.LENGTH_LONG).show();
                            }
                        });
                    }
                }

            });

        }
    }

    @RequiresApi(api = Build.VERSION_CODES.M)
    private boolean hasPermission() {
        if (ContextCompat.checkSelfPermission(getCurrentActivity(), Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED) {
            requestPermissions(getCurrentActivity(), new String[]{
                    Manifest.permission.CAMERA
            }, REQUEST_CAMERA_PERMISSION);

            return false;
        }
        return true;
    }

    private void sendEvent(ReactContext reactContext,
                           String eventName,
                           String processStatus,
                           String encrypted) {

        WritableMap params = Arguments.createMap();
        if(encrypted != ""){
            params.putString("base64", processStatus);
            params.putString("encrypted", encrypted);
        }
        else
            params.putString("objResult", processStatus);

        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);

    }

    @Override
    public void onErrorAcessoBio(ErrorBio errorBio) {
        sendEvent(reactContext, "onError", errorBio.getDescription(), "");
    }

    @Override
    public void onUserClosedCameraManually() {
        sendEvent(reactContext, "onError", "Usuário fechou a câmera manualmente", "");
    }

    @Override
    public void onSystemClosedCameraTimeoutSession() {
        sendEvent(reactContext, "onError", "Tempo de sessão excedido", "");
    }

    @Override
    public void onSystemChangedTypeCameraTimeoutFaceInference() {
        sendEvent(reactContext, "onError", "Tempo de inferência inteligente de face excedido.", "");
    }

    @Override
    public void onSuccessSelfie(ResultCamera resultCamera) {
        sendEvent(reactContext, "onSuccess", resultCamera.getBase64(), resultCamera.getEncrypted()); //base64
        // sendEvent(reactContext, "onSuccess", resultCamera.getEncrypted()); //JWT
        // sendEvent(reactContext, "onSuccess", "Selfie capturada com sucesso");
    }

    @Override
    public void onErrorSelfie(ErrorBio errorBio) {
        sendEvent(reactContext, "onError", errorBio.getDescription(), "");
    }

    @Override
    public void onSuccessDocument(ResultCamera result) {
        sendEvent(reactContext, "onSuccess", result.getBase64(), result.getEncrypted()); //base64
        // sendEvent(reactContext, "onSuccess", result.getEncrypted()); //JWT
        // sendEvent(reactContext, "onSuccess", "Documento capturado com sucesso");
    }

    @Override
    public void onErrorDocument(String s) {
        sendEvent(reactContext, "onError", s, "");
    }


}
