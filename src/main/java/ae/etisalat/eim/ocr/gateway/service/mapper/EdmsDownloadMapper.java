package ae.etisalat.eim.ocr.gateway.service.mapper;

import ae.etisalat.eim.ocr.gateway.domain.*;
import ae.etisalat.eim.ocr.gateway.service.dto.EdmsDownloadDTO;

import org.mapstruct.*;
import java.util.List;

/**
 * Mapper for the entity EdmsDownload and its DTO EdmsDownloadDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface EdmsDownloadMapper {

    @Mapping(source = "edmsLocation.id", target = "edmsLocationId")
    @Mapping(source = "serviceResp.id", target = "serviceRespId")
    EdmsDownloadDTO edmsDownloadToEdmsDownloadDTO(EdmsDownload edmsDownload);

    List<EdmsDownloadDTO> edmsDownloadsToEdmsDownloadDTOs(List<EdmsDownload> edmsDownloads);

    @Mapping(source = "edmsLocationId", target = "edmsLocation")
    @Mapping(source = "serviceRespId", target = "serviceResp")
    EdmsDownload edmsDownloadDTOToEdmsDownload(EdmsDownloadDTO edmsDownloadDTO);

    List<EdmsDownload> edmsDownloadDTOsToEdmsDownloads(List<EdmsDownloadDTO> edmsDownloadDTOs);

    default EdmsLocation edmsLocationFromId(Long id) {
        if (id == null) {
            return null;
        }
        EdmsLocation edmsLocation = new EdmsLocation();
        edmsLocation.setId(id);
        return edmsLocation;
    }

    default ServiceResp serviceRespFromId(Long id) {
        if (id == null) {
            return null;
        }
        ServiceResp serviceResp = new ServiceResp();
        serviceResp.setId(id);
        return serviceResp;
    }
}
