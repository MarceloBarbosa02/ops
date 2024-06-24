//
//  AcessoBioViewController.h
//  AcessoBioReactNative
//
//  Created by João Victor Vieira Oliveira on 21/06/23.
//

#import <UIKit/UIKit.h>
#import <AcessoBio/AcessoBioManager.h>
#import <AcessoBio/AcessoBioManagerDelegate.h>
#import "UnicoCheckModule.h"
@class UnicoCheckModule;
NS_ASSUME_NONNULL_BEGIN

@interface UnicoCheckViewController : UIViewController <AcessoBioManagerDelegate,
SelfieCameraDelegate, AcessoBioSelfieDelegate, DocumentCameraDelegate, AcessoBioDocumentDelegate> {
  AcessoBioManager *unicoCheck;
}
@property (strong, nonatomic) UnicoCheckModule *acessoBioModule;
@property (strong, nonatomic) UIViewController *viewOrigin;
@property (assign, nonatomic) CameraMode mode;

@end

NS_ASSUME_NONNULL_END