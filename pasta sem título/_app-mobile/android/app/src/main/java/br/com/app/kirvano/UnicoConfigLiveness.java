package br.com.app.kirvano;

import com.acesso.acessobio_android.onboarding.AcessoBioConfigDataSource;
import androidx.annotation.NonNull;

public class UnicoConfigLiveness implements AcessoBioConfigDataSource {
    @NonNull
    @Override
    public String getProjectNumber() {
        return "51593494989106393";
    }

    @NonNull
    @Override
    public String getProjectId() {
        return "Kirvano";
    }

    @NonNull
    @Override
    public String getMobileSdkAppId() {
        return "1:340285:android";
    }

    @NonNull
    @Override
    public String getBundleIdentifier() {
        return "br.com.app.kirvano";
    }

    @NonNull
    @Override
    public String getHostInfo() {
        return "Up4XTo9Enmc9krxVWOW2KkDIHFlJDv6AXGgf547UEGA=";
    }

    @NonNull
    @Override
    public String getHostKey() {
        return "MUebvig4n9Y2P3ofVBwUjIQVmTSDUXyAO3IzPDELjX4g4zT/iO8EmpH5R/fpjImh";
    }
}
