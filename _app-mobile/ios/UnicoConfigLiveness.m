#import "UnicoConfigLiveness.h"
#import <AcessoBio/AcessoBio-Swift.h>

///Esta classe é um exemplo de como implementar o AcessoBioConfigDataSource, entretanto é preferível que esses dados venham de algum Remote Config ou Backend.

@implementation UnicoConfigLiveness : NSObject

- (NSString * _Nonnull)getBundleIdentifier {
    return @"br.com.app.kirvano";
}

- (NSString * _Nonnull)getHostInfo {
    return @"Up4XTo9Enmc9krxVWOW2KkDIHFlJDv6AXGgf547UEGA=";
}

- (NSString * _Nonnull)getHostKey {
    return @"MUebvig4n9Y2P3ofVBwUjIQVmTSDUXyAO3IzPDELjX4g4zT/iO8EmpH5R/fpjImh";
}

- (NSString * _Nonnull)getMobileSdkAppId {
    return @"2:340285:ios";
}

- (NSString * _Nonnull)getProjectId {
    return @"Kirvano";
}

- (NSString * _Nonnull)getProjectNumber {
    return @"51593494989106393";
}

@end
