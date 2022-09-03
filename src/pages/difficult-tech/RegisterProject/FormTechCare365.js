import { RadioGroup, FormControlLabel, Radio, Typography, TextField, Grid, Box, Checkbox, Button } from '@mui/material';
import { throttle } from 'lodash';

import { FormControl, FormGroup } from '../../../../node_modules/@mui/material/index';

const FormTechCare365 = ({
    projectNameRef,
    consultingForm,
    onChangeConsultingForm,
    consultingField,
    onChangeConsultingField,
    formInfo,
    detailInfoRef,
    effectivenessRef,
    nameRef,
    groupRef,
    contactRef,
    etcRef,
    etcChecked,
    onSubmit
}) => {
    const consultingFormList = [
        '단기 기술지도(1일 4시간이상 4회 이내 단기기술지도)',
        '외부 자문의원 지도',
        '패키지形(2개학과이상의 교수 또는 2명이상 교수 및 자문위원으로 구성)',
        '학기중 장기기술지도(기업의 여러가지 애로사항을 주 1~2회, 1일 6H, 이상, 8주이내 정기적으로 방문하여 패키지 형태로 지도)',
        '방학․연구년중 장기기술지도(기업의 여러가지 애로사항을 주 2~3회, 1일 8H, 4주 이내 기업에 상주하면서 패키지 형태로 지도)'
    ];
    const consultingFieldList = [
        '기술지도',
        '법률자문/수출입 지원',
        '경영지도',
        '사업화지도',
        '특허분석',
        '국가공인인증컨설팅 자문',
        '디자인지도',
        '마케팅지도',
        '해외시장 개척',
        '사업화지도',
        '사업계획서 작성지도'
    ];

    const applicantInfoList = [
        '기업명',
        '대표자명',
        '시업자등록번호',
        '전화번호 및 팩스번호',
        '주소',
        '작성자 성명',
        '부서/직위',
        '전화번호',
        'e-mail',
        '상시 근로자 수',
        '매출액(전년도 말 기준)'
    ];
    const growthDegreeList = [
        '창업기(1년미만, 5인 이하)',
        '초기성장기(3년미만, 50인 이하)',
        '성장기(3년이상, 300인 미만)',
        '성숙기(5년이상, 300인 이상)',
        '업종전환기(동일제품 10년 이상)'
    ];

    const businessTypeList = [
        'IT분야(전기전자, 통신, 컴퓨터, IT관련 기계장비 등)',
        '그린에너지분야(태양광, 연료전지, 2차전지 등)',
        '음식료',
        '섬유의복',
        '목제종이',
        '석유화확',
        '비금속',
        '운송장비'
    ];

    let formInfoArr = Object.values(formInfo);

    let cnt = 0;

    let checkedBusinessType = ['0', '0', '0', '0', '0', '0', '0', '0'];
    for (var i = 0; i < formInfo.businessType.length; i++) {
        checkedBusinessType[Number(formInfo.businessType[i])] = '1';
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} justifyContent="center" alignItems="center">
                <Box component="form" noValidate autoComplete="off">
                    <Grid container spacing={1}>
                        {applicantInfoList.map((applicantInfo, index) => (
                            <Grid item xs={index === 4 ? 8 : 4} key={index}>
                                <Typography variant="body2"> {applicantInfo}</Typography>
                                <TextField
                                    fullWidth
                                    type="text"
                                    variant="standard"
                                    defaultValue={formInfoArr[index]}
                                    InputProps={{
                                        disabled: true
                                    }}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box>
                    <Typography variant="h5">기업 성장 단계</Typography>
                </Box>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group">
                    <Grid container>
                        {growthDegreeList.map((growthDegrees, index) => (
                            <Grid item xs={4} key={index}>
                                <FormControlLabel
                                    control={Number(formInfo.growthDegree) === index ? <Radio disabled checked /> : <Radio disabled />}
                                    label={growthDegrees}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </RadioGroup>
            </Grid>
            <Grid item xs={12}>
                <Box>
                    <Typography variant="h5">업종</Typography>
                </Box>
                <FormGroup>
                    <Grid container>
                        {businessTypeList.map((businessTypes, index) => (
                            <Grid item xs={4} key={index}>
                                <FormControlLabel
                                    control={checkedBusinessType[index] === '1' ? <Checkbox disabled checked /> : <Checkbox disabled />}
                                    label={businessTypes}
                                />
                            </Grid>
                        ))}

                        <Grid item xs={4}>
                            <Typography variant="body2"> 기타</Typography>
                            <TextField
                                fullWidth
                                type="text"
                                variant="standard"
                                defaultValue={formInfo.businessTypeEtc}
                                InputProps={{
                                    disabled: true
                                }}
                            />
                        </Grid>
                    </Grid>
                </FormGroup>
            </Grid>
            <Grid item xs={12}>
                <Box>
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                            <Typography variant="h5">주생산품목/서비스</Typography>
                            <TextField
                                fullWidth
                                type="text"
                                placeholder="주생산품목/서비스"
                                variant="standard"
                                defaultValue={formInfo.mainService}
                                InputProps={{
                                    disabled: true
                                }}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box>
                    <Typography variant="h5">프로젝트 제목</Typography>
                </Box>
                <Grid>
                    <TextField fullWidth type="text" placeholder="프로젝트 제목" variant="standard" inputRef={projectNameRef} />
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Box>
                    <Typography variant="h5">지도/자문 형태</Typography>
                </Box>
                <FormGroup>
                    <Grid container>
                        {consultingFormList.map((consultingForms, index) => (
                            <div key={index}>
                                <Grid item xs={12} key={index}>
                                    <FormControlLabel
                                        control={<Checkbox value={index} onChange={onChangeConsultingForm} />}
                                        label={consultingForms}
                                    />
                                </Grid>
                            </div>
                        ))}
                    </Grid>
                </FormGroup>
            </Grid>
            <Grid item xs={12}>
                <Box>
                    <Typography variant="h5">지도/자문 분야</Typography>
                </Box>
                <FormGroup>
                    <Grid container>
                        {consultingFieldList.map((consultingFields, index) => (
                            <Grid item xs={4} key={index}>
                                <FormControlLabel
                                    control={<Checkbox value={index} onChange={onChangeConsultingField} />}
                                    label={consultingFields}
                                />
                            </Grid>
                        ))}
                        <Grid item xs={3}>
                            <TextField fullWidth label="기타" type="text" variant="standard" inputRef={etcRef} />
                        </Grid>
                    </Grid>
                </FormGroup>
            </Grid>
            <Grid item xs={12}>
                <Box>
                    <Typography variant="h5">희망지도/자문위원</Typography>
                </Box>
                <Box>
                    <Grid container spacing={5}>
                        <Grid item xs={4}>
                            <TextField fullWidth label="성명" type="text" variant="standard" inputRef={nameRef} />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField fullWidth label="소속" type="text" variant="standard" inputRef={groupRef} />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField fullWidth label="연락처" type="text" variant="standard" inputRef={contactRef} />
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box>
                    <Typography variant="h5">지원요청의 상세내용</Typography>
                </Box>
                <Box>
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                type="text"
                                multiline
                                placeholder="지원받고자 하는 분야의 상세 내용 기술"
                                inputRef={detailInfoRef}
                                rows={4}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box>
                    <Typography variant="h5">기대효과</Typography>
                </Box>
                <Box>
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                placeholder="지원을 희망하는 분야의 내용을 정량적으로 수치화하여 작성하고 지원을 통한 객관적이고 정량적인 기대효과를 기술"
                                type="text"
                                multiline
                                rows={4}
                                inputRef={effectivenessRef}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
            <Grid item xs={12} justifyContent="center" alignItems="center">
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <form onSubmit={onSubmit}>
                        <Button variant="contained" type="submit">
                            애로 기술 등록
                        </Button>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
};
export default FormTechCare365;
