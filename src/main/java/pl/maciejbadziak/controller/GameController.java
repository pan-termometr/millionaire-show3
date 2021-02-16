package pl.maciejbadziak.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import pl.maciejbadziak.data.QuestionRepository;
import pl.maciejbadziak.model.Lifeline;
import pl.maciejbadziak.model.Question;
import pl.maciejbadziak.service.GameService;

import java.util.List;
import java.util.Random;

@Controller
public class GameController {

    @Autowired
    private GameService gameService;

    @Autowired
    public GameController(GameService gameService) {
        this.gameService = gameService;
    }

    @PostMapping("/game")
    String startGame(@ModelAttribute Question question, Model model,
                     @RequestParam(name = "newGame", defaultValue = "false") String ifNewGame,
                     @RequestParam(value = "lifelineFiftyStatus", defaultValue = "noUsed") String lifelineFiftyStatus,
                     @RequestParam(value = "lifelinePhoneStatus", defaultValue = "noUsed") String lifelinePhoneStatus,
                     @RequestParam(value = "lifelineAudienceStatus", defaultValue = "noUsed") String lifelineAudienceStatus) {
        return gameService.startNewGame(ifNewGame, lifelineFiftyStatus, lifelinePhoneStatus, lifelineAudienceStatus, model);
    }

    @PostMapping("/end")
    String showPrize(@ModelAttribute Question question, Model model) {
        return gameService.getPrice(model);
    }

    @PostMapping("/badAnswer")
    String showGuaranteedPrize(@ModelAttribute Question question, Model model){
        return gameService.getGuaranteedPrice(model);
    }

}