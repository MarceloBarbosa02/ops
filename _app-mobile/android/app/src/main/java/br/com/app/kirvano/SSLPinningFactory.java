package br.com.app.kirvano;

import com.facebook.react.modules.network.OkHttpClientFactory;
import com.facebook.react.modules.network.OkHttpClientProvider;
import okhttp3.CertificatePinner;
import okhttp3.OkHttpClient;

public class SSLPinningFactory implements OkHttpClientFactory {
   private static String hostname = "app-api.kirvano.com";
   private static String hostnameQA = "app-api-qa.kirvano.com";
   private static String hostnameQA2 = "app-api-qa2.kirvano.com";

   public OkHttpClient createNewNetworkModuleClient() {

      CertificatePinner certificatePinner = new CertificatePinner.Builder()
        .add(hostname, "sha256/81Wf12bcLlFHQAfJluxnzZ6Frg+oJ9PWY/Wrwur8viQ=")
        .add(hostnameQA, "sha256/81Wf12bcLlFHQAfJluxnzZ6Frg+oJ9PWY/Wrwur8viQ=")
        .add(hostnameQA2, "sha256/81Wf12bcLlFHQAfJluxnzZ6Frg+oJ9PWY/Wrwur8viQ=")
        .build();

      OkHttpClient.Builder clientBuilder = OkHttpClientProvider.createClientBuilder();
      return clientBuilder.certificatePinner(certificatePinner).build();
  }
}
