package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    //    @RequestMapping(method = RequestMethod.GET,path ="/")
    @GetMapping({"/"})
    public String index(){
//        return "index.html";
//        return "/WEB-INF/views/index.jsp";
        return "index";
    }

    @GetMapping("/header")
    public String header(){
        return"header";
    }
    @GetMapping("/footer")
    public String footer(){
        return"footer";
    }
    @GetMapping("/join")
    public String join(){
        return"join";
    }
    @GetMapping("/agentJoin")
    public String agentJoin(){
        return"agentJoin";
    }

    @GetMapping("/main")
    public String main(){
        return"main";
    }

    @GetMapping("/login")
    public String login(){
        return"login";
    }

    @GetMapping("/board")
    public String board(){
        return"board";
    }

    @GetMapping("/agentList")
    public String agentAll(){
        return "agentList";
    }

    @GetMapping("/boardWrite")
    public String boardWrite(){
        return"boardWrite";
    }

    @GetMapping("/reviewBoard")
    public String reviewBoard(){
        return"reviewBoard";
    }
    @GetMapping("/reviewDetail")
    public String reviewDetail(){
        return"reviewDetail";
    }

    @GetMapping("/fileUpload")
    public String fileUpload(){
        return"fileUpload";
    }

    @GetMapping("/review")
    public String review(){
        return"review";
    }

    @GetMapping("/writeReview")
    public String writeReview(){
        return"writeReview";
    }

    @GetMapping("/userMypage")
    public String userMypage(){
        return"userMypage";
    }
    @GetMapping("/agentMypage")
    public String agentMypage(){
        return"agentMypage";
    }

    @GetMapping("/FnA")
    public String FnA(){
        return "FnA";
    }
    @GetMapping("/FnADetail")
    public String FnADetail(){
        return "FnADetail";
    }

    @GetMapping("/agentLogin")
    public String agentLogin(){
        return "agentLogin";
    }

    @GetMapping("/lookForAgent")
    public String lookForAgent(){
        return "lookForAgent";
    }
    @GetMapping("/doThisPage")
    public String doThisPage(){
        return "doThisPage";
    }

    @GetMapping("/requestDetail")
    public String requestDetail(){
        return "requestDetail";
    }
    @GetMapping("/moneyCharge")
    public String moneyCharge(){
        return "moneyCharge";
    }
    @GetMapping("/userDelete")
    public String userDelete(){
        return "userDelete";
    }
    @GetMapping("/request-details")
    public String userRequestDetails(){
        return "request-details";
    }

    @GetMapping("/userRequestDetail")
    public String userRequestDetail(){
        return "userRequestDetail";
    }
    @GetMapping("/category")
    public String category(){
        return "category";
    }

    @GetMapping("/deleteUser")
    public String deleteUser(){
        return "deleteUser";
    }


    @GetMapping("/userUpdate")
    public String userUpdatePage(){
        return "userUpdate";
    }

    @GetMapping("/agentUpdate")
    public String agentUpdatePage() {return "agentUpdate";}

    @GetMapping("/search")
    public String search() {return "search";}

    @GetMapping("/agentListByCategoryCode")
    public String agentListByCategoryCode() {return "agentListByCategoryCode";}

    @GetMapping("/agentRequestList")
    public String agentRequestList() {return "agentRequestList";}

    @GetMapping("/makeMoney")
    public String makeMoney() {return "makeMoney";}

    @GetMapping("/agentDelete")
    public String agentDelete() {return "agentDelete";}


}
