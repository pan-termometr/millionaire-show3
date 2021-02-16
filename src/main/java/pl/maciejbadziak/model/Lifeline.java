package pl.maciejbadziak.model;

import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.stereotype.Component;
import org.springframework.web.context.WebApplicationContext;

@Component
@Scope(scopeName= WebApplicationContext.SCOPE_SESSION, proxyMode= ScopedProxyMode.TARGET_CLASS)
public class Lifeline {
    private boolean fifty;
    private boolean phone;
    private boolean audience;

    public Lifeline(boolean fifty, boolean phone, boolean audience) {
        this.fifty = fifty;
        this.phone = phone;
        this.audience = audience;
    }

    public Lifeline() {
    }

    public boolean isFifty() {
        return fifty;
    }

    public void setFifty(boolean fifty) {
        this.fifty = fifty;
    }

    public boolean isPhone() {
        return phone;
    }

    public void setPhone(boolean phone) {
        this.phone = phone;
    }

    public boolean isAudience() {
        return audience;
    }

    public void setAudience(boolean audience) {
        this.audience = audience;
    }

}
