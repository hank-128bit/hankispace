
/* 
 * Step
 * Sync ( from DB ), Conversion ( data -> doc )
*/

// 1. Event Data From Live DB Server
let db_schedule_data = {
    event_type: 210,
    country_filter: "ja", // ja, en, th, ta or empty
    begin_date: "2020-01-10 11:00:00",
    end_date: "2020-01-15 11:00:00",

};

// 2. Event From CDN Data
let xml_schedule_data = {

};


// db_schedule_data + xml_schedule_data => formatted_data

// 3. Patch Note Data
let formatted_data = {
    patch_info: {
        build_version: "6.12.0"
    },
    schedule_data: {
        index: 1,
        name: "트리하우스",
        start: "2020-01-10 11:00:00",
        end: "2020-01-15 11:00:00",
        state: 0, // 0 : 개시, 1 : 진행중, 2 : 종료
        detail: "https://conf.treenod.com/pages/viewpage.action?pageId=75510505",
        filter: ["JP", "EN", "TA", "TH"],
        work: ["ADMIN TOOL"]
    }
};

function getEventName(type) {
    type = type.toString();
    let name_map = {
        '-1' : "NONE",
        '24' : "1 PLAY 5 DIA",
        '101' : "라군 핫타임 이벤트",
        '102' : "라군 보물상자 할인 이벤트",
        '210' : "트리하우스",
    };
}

// All Event Type
{
    const None = -1;
    const ONE_PLAY_5_DIA_EVENT = 24;
    const MARBLE_HOT_TIME_EVENT = 101;
    const MARBLE_TREASURE_BOX_EVENT = 102;
    /**
     * 배틀 이벤트
     *
     * @see BattleEvent
     */
    const BATTLE_EVENT = 200;
    /**
     * 단기 로그인 이벤트
     *
     * @see ShortTermLogin
     */
    const SHORT_TERM_LOGIN_EVENT = 201;
    /**
     * 콜라보 샵 설정
     *
     * @see ShopCollaboConfig
     */
    const COLLABO_SHOP_EVENT = 202;
    /**
     * 한계돌파 이벤트
     *
     * @see BeyondLimit
     */
    const BEYOND_LIMIT_EVENT = 203;
    /**
     * 공동 이벤트
     *
     * @see CommonEvent
     */
    const COMMON_EVENT = 204;
    /**
     * 패키지 판매 이벤트
     *
     * @see BillingPackageConfig
     */
    const BILLING_PACKAGE_EVENT = 205;
    /**
     * 로그인 나무 이벤트
     *
     * @see LoginEvent
     */
    const LOGIN_TREE_EVENT = 206;
    /**
     * 럭키 6 소환 이벤트
     *
     * @see RandomSummon
     */
    const RANDOM_SUMMON_EVENT = 207;
    /**
     * 터치 팡 이벤트
     *
     * @see TouchPangRequestProcessor
     */
    const TOUCH_PANG_EVENT = 208;
    /**
     * 데코 팡 이벤트
     *
     * @see DecoPangRequestProcessor
     */
    const DECO_PANG_EVENT = 209;
    /**
     * 미션 스템프 이벤트
     *
     * @see MissionStampRequestProcessor
     */
    const MISSION_STAMP_EVENT = 210;
    /**
     * 1회 플레이시 보상 지급 이벤트
     *
     * @see SinglePlayRewardConfig
     */
    const SINGLE_PLAY_REWARD = 211;
    /**
     * 휴면 유저 복귀 이벤트
     *
     * @see ReturnUserRewardConfig
     */
    const RETURN_USER_REWARD = 212;
    /**
     * 클로버 보내기 이벤트
     *
     * @see SendCloverRewardConfig
     */
    const SEND_CLOVER_REWARD = 213;
    /**
     * 배수 버프 이벤트
     *
     * @see MultiplyBuffConfig
     */
    const MULTIPLY_BUFF_EVENT = 214;
    /**
     * 핫 스팟 이벤트
     *
     * @see HotSpotRequestProcessor
     */
    const HOT_SPOT_EVENT = 215;
    /**
     * 아이템 가챠 이벤트
     *
     * @see ItemGatchaConfig
     */
    const ITEM_GATCHA_EVENT = 216;
    /**
     * 매직 카드 이벤트
     *
     * @see MagicCardEventConfig
     */
    const MAGIC_CARD_EVENT = 217;
    /**
     * 럭키 패키지 이벤트 ( 포코 박스 )
     *
     * @see LuckyBagConfig
     */
    const LUCKY_BAG_EVENT = 218;
    /**
     * 리얼 굿즈 이벤트
     *
     * @see PromotionEventConfig
     */
    const PROMOTION_EVENT = 219;
    /**
     * 콜렉션 이벤트
     */
    const COLLECTION_EVENT = 220;
    /**
     * 빙고 이벤트
     */
    const BINGO_EVENT = 221;
    /**
     * 라인 6주년 기념 캠페인
     */
    const LINE_6TH_CAMPAIGN = 222;

    /**
     * 보스 배틀 이벤트
     */
    const BOSS_BATTLE_EVENT = 223;

    /**
     * 재화 할인 이벤트
     */
    const GOODS_SALE_EVENT = 224;

    /**
     * 재화 보너스 이벤트
     */
    const GOODS_BONUS_EVENT = 225;

    /**
     * 매직 세컨드 이벤트
     */
    const MAGIC_SECOND_EVENT = 226;

    /**
     * 동물 구출 대작전 이벤트
     */
    const RESCUE_CHARACTER_EVENT = 227;

    /**
     * 환영의 라군 이벤트
     */
    const MIRAGE_MARBLE_EVENT = 228;

    /**
     * 스타일 업! 이벤트
     */
    const STYLE_UP_EVENT = 229;

    /**
     * 공격 블록 할인 이벤트
     */
    const ATK_BLOCK_SALE_EVENT = 230;

    /**
     * 에피소드 이벤트
     */
    const EPISODE_EVENT = 231;

    /**
     * 트리 하우스
     */
    const TREE_HOUSE_EVENT = 232;
    /** Special Item Sale Event */
    const SPECIAL_ITEM_SALE_EVENT = 10000;
    /** Ready Item Shop Sale Event */
    const READY_ITEM_SALE_EVENT = 10001;
    /** Boss Battle Support Animal Summon Sale Event */
    const BOSS_SUPPORT_ANIMAL_SALE_EVENT = 10002;
    /** Expand Slot Sale Event */
    const EXPAND_SLOT_SALE_EVENT = 10003;
    /** Summon Animal Sale Event */
    const SUMMON_ANIMAL_SALE_EVENT = 10004;
    /** Cherry Shop Sale Event */
    const CHERRY_SHOP_SALE_EVENT = 10005;
    /** Dia Shop Sale Event */
    const DIA_SHOP_SALE_EVENT = 10006;
    /** Loading Scene Character Edit INFO */
    const LOADING_SCENE_CHARACTER_INFO = 10007;
    /** Collection Image File INFO */
    const COLLECTION_EVENT_IMAGE_INFO = 10008;
    /** Old Ranking Event INFO */
    const OLD_RANKING_EVENT_INFO = 10009;
    /** Largoon Treasure Box Sale Event */
    const LARGOON_BOX_SALE_EVENT = 10010;
}
